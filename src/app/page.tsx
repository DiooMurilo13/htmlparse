"use client";
import { Form } from "@/components/Form";
import { Input } from "@/components/Input";
import { Screen } from "@/components/Screen";
import { useState } from "react";
import fs from "fs";
import cheerio from "cheerio";

export default function Home() {
  const [html, setHtml] = useState("");

  function submit(html: any) {
    const html1 = html.htmlo;

    // Seu segundo campo HTML
    const html2 = html.vsl;

    // Carregar o HTML usando cheerio
    const $ = cheerio.load(html1);

    // Encontrar a seção que está acima da div com id "smartplayer"
    const sectionAboveSmartPlayer = $("#smartplayer").closest("section");

    // Substituir o conteúdo da seção pelo conteúdo do segundo campo HTML
    sectionAboveSmartPlayer.html(html2);

    // Converter de volta para uma string HTML
    const resultado = $.html();
    setHtml(resultado);
  }

  return (
    <div className="col-start-5 col-end-9 -mt-56 flex flex-col justify-center items-center gap-10">
      <Form onSubmit={submit}>
        <Input
          name={"htmlo"}
          inputName="HTML"
          placeholder="Coloque o HTML original aqui"
        />
        <Input
          name={"vsl"}
          inputName="VSL"
          placeholder="Coloque o HTML da VSL aqui"
          required={true}
        />
        <Form.Button>Converter</Form.Button>
      </Form>

      <div className="flex flex-col overflow-y-auto h-96 w-96">
        <div>HTML convertido</div>
        <div>{html}</div>
      </div>
    </div>
  );
}
