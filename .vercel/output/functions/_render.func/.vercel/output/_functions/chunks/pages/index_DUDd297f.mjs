/* empty css                         */
import { c as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead, d as addAttribute, i as renderTransition } from '../astro_SqQHYxhc.mjs';
import 'kleur/colors';
import 'html-escaper';
import { d as dataUsers, $ as $$IndexLayout } from './_id__Dmp1-dqa.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import 'react';

function Card({ user, username, img, folder, tw, id }) {
  return /* @__PURE__ */ jsxs("article", { className: "rounded-2xl relative bg-white h-80 w-60 flex flex-col hover:-translate-y-4 transition-all hover:shadow-lg hover:shadow-stone-300 :w-30", children: [
    /* @__PURE__ */ jsx("a", { href: `/${id}`, className: "absolute h-full w-full " }),
    /* @__PURE__ */ jsx("header", { className: "w-full h-2/5", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: folder,
        alt: `${user}-walpaper`,
        className: "object-cover h-full w-full",
        style: {
          borderRadius: "1rem 1rem 0 0"
        }
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-3 px-3 py-3", children: [
      /* @__PURE__ */ jsx("img", { src: img, alt: user, className: "rounded-full h-max" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start w-max", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-bold text", children: user }),
        /* @__PURE__ */ jsxs("span", { children: [
          "@",
          username
        ] })
      ] })
    ] })
  ] });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "IndexLayout", $$IndexLayout, { "title": "Tweet API" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-4xl font-light text-white w-full text-center">The X API</h1> <p class="font-light text-2xl text-white w-full text-center">
Choose one of the users to see his highest tweet
</p> <section class="h-full w-full"> <div class="flex justify-center flex-wrap w-full h-full overflow-y-auto pt-8 pb-20 gap-5"> ${dataUsers.map((user) => renderTemplate`<article${addAttribute(renderTransition($$result2, "ptz2u25w", "slide", `tweetboard ${user.user_id}`), "data-astro-transition-scope")}> ${renderComponent($$result2, "Card", Card, { "user": user.name, "username": user.username, "img": user.profile_pic_url, "folder": user.profile_banner_url, "tw": user.tweetExID, "id": user.user_id })} </article>`)} </div> </section> ` })}`;
}, "C:/Users/Lautaro/Desktop/CODIGO/ASTRO/twitter-api/src/pages/index.astro", "self");

const $$file = "C:/Users/Lautaro/Desktop/CODIGO/ASTRO/twitter-api/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
