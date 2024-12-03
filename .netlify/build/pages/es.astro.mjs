/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead } from '../chunks/astro/server_RVDumZPL.mjs';
import { $ as $$TypeWritter, a as $$Card, c as colors, W as WordNeonColor, w as wordColors, b as $$LanguageCard, d as $$ColumLayout, e as $$Icon, f as $$Layout } from '../chunks/Icon_Bqv-W7cK.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const titlePage = "Alejandro Lucena - Desarrollador";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "language": "es", "titlePage": titlePage, "data-astro-cid-7pewbour": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="gap-4 mb-8 text-white flex flex-col" style="margin-right: 1050px;" data-astro-cid-7pewbour> <h1 class="text-5xl " data-astro-cid-7pewbour>Alejandro Lucena </h1> <h2 data-astro-cid-7pewbour> ${renderComponent($$result2, "TypeWritter", $$TypeWritter, { "text": "Desarrollador web, Android y Java", "speed": 150, "delay": 1e3, "showBlink": false, "data-astro-cid-7pewbour": true })} <!--
<WordNeonColorAstro word="Web" color={wordColors.yellow} effect={false} />,
  <WordNeonColorAstro word="Web" color={wordColors.yellow} effect={false} />,
   y
   <WordNeonColorAstro word="Web" color={wordColors.yellow} effect={false} />
  desarrollador
--> </h2> </div> <div style="display: flex; " data-astro-cid-7pewbour> ${renderComponent($$result2, "Card", $$Card, { "borderColor": colors.purple, "width": "600px", "height": "510px", "title": "", "data-astro-cid-7pewbour": true }, { "default": ($$result3) => renderTemplate` <p class="text-xl" data-astro-cid-7pewbour>
Mi nombre es ${renderComponent($$result3, "WordNeonColor", WordNeonColor, { "client:load": true, "word": "Alejandro Lucena", "color": wordColors.blue, "effect": true, "client:component-hydration": "load", "client:component-path": "/home/lucenabo/Development/Frontend/Astro/portfolio/src/components/WordNeonColor", "client:component-export": "default", "data-astro-cid-7pewbour": true })} y soy estudiante de desarrollo de aplicaciones multiplataforma,
Soy ${renderComponent($$result3, "WordNeonColor", WordNeonColor, { "client:load": true, "word": "autodidacta", "color": wordColors.darkblue, "effect": true, "client:component-hydration": "load", "client:component-path": "/home/lucenabo/Development/Frontend/Astro/portfolio/src/components/WordNeonColor", "client:component-export": "default", "data-astro-cid-7pewbour": true })} así que aprendí desarrollo web por mi cuenta.
</p> <hr data-astro-cid-7pewbour> <p class="text-xl" data-astro-cid-7pewbour>
Tengo más de un año de experiencia en ${renderComponent($$result3, "WordNeonColor", WordNeonColor, { "client:load": true, "word": "Java", "color": wordColors.orange, "effect": true, "client:component-hydration": "load", "client:component-path": "/home/lucenabo/Development/Frontend/Astro/portfolio/src/components/WordNeonColor", "client:component-export": "default", "data-astro-cid-7pewbour": true })} y algunos meses en
${renderComponent($$result3, "WordNeonColor", WordNeonColor, { "client:load": true, "word": "JavaScript", "color": wordColors.yellow, "effect": true, "client:component-hydration": "load", "client:component-path": "/home/lucenabo/Development/Frontend/Astro/portfolio/src/components/WordNeonColor", "client:component-export": "default", "data-astro-cid-7pewbour": true })}.
Realmente disfruto aprender por mi cuenta además de lo que se enseña en clase.
</p> <div class="flex gap-11 mt-12" data-astro-cid-7pewbour> ${renderComponent($$result3, "LanguageCard", $$LanguageCard, { "showBorderAndShadow": true, "set": "si", "color": "#80b7ff", "iconName": "SiMysql", "data-astro-cid-7pewbour": true })} ${renderComponent($$result3, "LanguageCard", $$LanguageCard, { "showBorderAndShadow": true, "set": "fa", "color": "orange", "iconName": "FaJava", "data-astro-cid-7pewbour": true })} ${renderComponent($$result3, "LanguageCard", $$LanguageCard, { "showBorderAndShadow": true, "set": "fa", "color": "#00DF7F", "iconName": "FaAndroid", "data-astro-cid-7pewbour": true })} </div> ` })} ${renderComponent($$result2, "ColumLayout", $$ColumLayout, { "data-astro-cid-7pewbour": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Card", $$Card, { "align": true, "borderColor": colors.blue, "width": "350px", "height": "242px", "title": "Habilidades", "data-astro-cid-7pewbour": true }, { "default": ($$result4) => renderTemplate` <div class="wrapper flex gap-4" data-astro-cid-7pewbour> <div class="first" data-astro-cid-7pewbour> ${renderComponent($$result4, "LanguageCard", $$LanguageCard, { "set": "fa", "color": "#000", "iconName": "FaGithub", "data-astro-cid-7pewbour": true })} </div> <div class="second" data-astro-cid-7pewbour> ${renderComponent($$result4, "LanguageCard", $$LanguageCard, { "set": "si", "color": "#f0db4f", "iconName": "SiJavascript", "data-astro-cid-7pewbour": true })} </div> <div class="third" data-astro-cid-7pewbour> ${renderComponent($$result4, "LanguageCard", $$LanguageCard, { "set": "fa", "color": "#61DBFB", "iconName": "FaReact", "data-astro-cid-7pewbour": true })} </div> <div class="fourth" data-astro-cid-7pewbour> ${renderComponent($$result4, "LanguageCard", $$LanguageCard, { "set": "si", "color": "#ff5a03", "iconName": "SiAstro", "data-astro-cid-7pewbour": true })} </div> <div class="fifth" data-astro-cid-7pewbour> ${renderComponent($$result4, "LanguageCard", $$LanguageCard, { "set": "fa", "color": "#FFF", "iconName": "FaLinux", "data-astro-cid-7pewbour": true })} </div> <div class="sixth" data-astro-cid-7pewbour> ${renderComponent($$result4, "LanguageCard", $$LanguageCard, { "set": "fa", "color": "#ff873d", "iconName": "FaGitAlt", "data-astro-cid-7pewbour": true })} </div> <div class="seventh" data-astro-cid-7pewbour> ${renderComponent($$result4, "LanguageCard", $$LanguageCard, { "set": "fa", "color": "orange", "iconName": "FaJava", "data-astro-cid-7pewbour": true })} </div> <div class="eighth" data-astro-cid-7pewbour> ${renderComponent($$result4, "LanguageCard", $$LanguageCard, { "set": "si", "color": "#80b7ff", "iconName": "SiMysql", "data-astro-cid-7pewbour": true })} </div> <div class="ninth" data-astro-cid-7pewbour> ${renderComponent($$result4, "LanguageCard", $$LanguageCard, { "set": "fa", "color": "#00DF7F", "iconName": "FaAndroid", "data-astro-cid-7pewbour": true })} </div> </div> ` })} ${renderComponent($$result3, "Card", $$Card, { "align": true, "borderColor": colors.green, "width": "350px", "height": "242px", "title": "Certificaci\xF3n Reciente", "data-astro-cid-7pewbour": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Icon", $$Icon, { "class": "text-9xl flex m-auto", "name": "cambridge", "data-astro-cid-7pewbour": true })} <p data-astro-cid-7pewbour>First Certificate in English B2</p> ` })} ` })} ${renderComponent($$result2, "ColumLayout", $$ColumLayout, { "data-astro-cid-7pewbour": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Card", $$Card, { "borderColor": colors.red, "width": "450px", "height": "242px", "title": "Experiencia Profesional", "data-astro-cid-7pewbour": true }, { "default": ($$result4) => renderTemplate` <p data-astro-cid-7pewbour>
En este momento, estoy estudiando y no he tenido la oportunidad de ganar experiencia profesional. He sido
${renderComponent($$result4, "WordNeonColor", WordNeonColor, { "word": "contactado", "color": "#fff", "effect": false, "data-astro-cid-7pewbour": true })} por algunas empresas interesadas en mi perfil,
pero debido a compromisos académicos y conflictos de horarios, no pude aceptar esas ofertas en ese momento. 😅 🧑🏻‍🎓
</p> ` })} <a href="/" data-astro-cid-7pewbour> ${renderComponent($$result3, "Card", $$Card, { "blue": true, "borderColor": colors.yellow, "width": "450px", "height": "242px", "title": "Publicaciones", "data-astro-cid-7pewbour": true }, { "default": ($$result4) => renderTemplate` <p data-astro-cid-7pewbour>
¡Bienvenido a mi página de publicaciones! Aquí comparto ideas, tutoriales y experiencias relacionadas con el desarrollo y las tecnologías.
¡Mantente atento a las actualizaciones regulares y no dudes en interactuar con el contenido!
</p> ` })} </a> ` })} </div> ` })} `;
}, "/home/lucenabo/Development/Frontend/Astro/portfolio/src/pages/es/index.astro", void 0);

const $$file = "/home/lucenabo/Development/Frontend/Astro/portfolio/src/pages/es/index.astro";
const $$url = "/es";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
