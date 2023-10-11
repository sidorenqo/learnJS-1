// https
// purpleschool.ru
// /course/javascript

const url = "https://purpleschool.ru/course/javascript";

function getUrlParts(url) {
  const [protocol, _, domen, ...way] = url.split("/");
  if (protocol === "https:" || protocol === "http:") {
    // Дополнительная проверка передаваемой ссылки
    if (!host.includes(".")) {
      return;
    }
    console.log(protocol, _, domen, way);
    console.log(`Протокол: ${protocol.split(":")[0]}`);
    console.log(`Адрес сайта: ${domen}`);
    console.log(`Путь внутри сайта: /${way.join("/")}`);
  }
}

getUrlParts(url);
