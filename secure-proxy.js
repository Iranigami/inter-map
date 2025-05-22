import express from "express";
import fetch from "node-fetch";
import * as cheerio from "cheerio";

const app = express();

app.get("/proxy", async (req, res) => {
  const targetUrl = req.query.url;

  if (!targetUrl || !targetUrl.startsWith("https://may9.ru")) {
    return res.status(400).send("Invalid or missing 'url' parameter");
  }

  try {
    const response = await fetch(targetUrl);
    let html = await response.text();

    const $ = cheerio.load(html);

    // Удаляем CSP
    $('meta[http-equiv="Content-Security-Policy"]').remove();

    // Добавляем <base> для корректной загрузки ресурсов
    if ($("base").length === 0) {
      $("head").prepend(`<base href="https://may9.ru/">`);
    }

    // Блокируем все ссылки
    $("a").each((_, el) => {
      $(el).removeAttr("href");
      $(el).css("pointer-events", "none");
      $(el).css("cursor", "default");
      
    });
    $(".subpages-slider-wrapper").css("pointer-events", "none");
    $(".ya-share2").css("pointer-events", "none");
    $(".post-video").css("display", "none");
    $("*").css("user-select", "none");

    // Добавляем CSS для гарантии
    $("head").append(`
      <style>
        a { pointer-events: none !important; cursor: default !important; }
      </style>
    `);

    // Переписываем src (изображения, скрипты и т.д.)
    $("[src]").each((_, el) => {
      const src = $(el).attr("src");
      if (src.startsWith("/")) {
        $(el).attr("src", "https://may9.ru" + src);
      }
    });

    // Переписываем ссылки в <link href="..."> (например, стили)
    $("link[href]").each((_, el) => {
      const href = $(el).attr("href");
      if (href.startsWith("/")) {
        $(el).attr("href", "https://may9.ru" + href);
      }
    });

    res.setHeader("Content-Type", "text/html");
    res.send($.html());
  } catch (error) {
    console.error("Proxy error:", error);
    res.status(500).send("Ошибка при проксировании");
  }
});

app.listen(4000, () => {
  console.log("HTML rewriting proxy запущен на http://localhost:4000");
});
