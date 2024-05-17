/* empty css                         */
import { c as createComponent, r as renderTemplate, d as addAttribute, e as createAstro, f as renderComponent, g as renderHead, h as renderSlot, m as maybeRenderHead, i as renderTransition } from '../astro_SqQHYxhc.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState } from 'react';
import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query';
/* empty css                         */

const dataUsers = [
	{
		user_id: "1464456702883991554",
		username: "jeroveintidos",
		name: "jero",
		follower_count: 110056,
		profile_pic_url: "https://pbs.twimg.com/profile_images/1786155476817711104/VKABDLSU_normal.jpg",
		profile_banner_url: "https://pbs.twimg.com/profile_banners/1464456702883991554/1714261969",
		tweetExID: "1789861989428154797",
		text: "Este es un tweet de prueba"
	},
	{
		user_id: "1087757588622651397",
		username: "porqueTTarg",
		name: "Tendencias en Argentina",
		follower_count: 274202,
		profile_pic_url: "https://pbs.twimg.com/profile_images/1633225938778439683/pytGv340_normal.jpg",
		profile_banner_url: "https://pbs.twimg.com/profile_banners/1087757588622651397/1703452073",
		tweetExID: "1789807986866520259",
		text: "Este es un tweet de prueba"
	},
	{
		user_id: "1476973666340540421",
		username: "MedioRiver",
		name: "Medio River",
		follower_count: 69912,
		profile_pic_url: "https://pbs.twimg.com/profile_images/1683676004227620865/Cp8WaXmr_normal.jpg",
		profile_banner_url: "https://pbs.twimg.com/profile_banners/1476973666340540421/1680286746",
		tweetExID: "1789827360855879818",
		text: "Este es un tweet de prueba"
	},
	{
		user_id: "1444091590507700225",
		username: "velez1910_",
		name: "river plate",
		follower_count: 22064,
		profile_pic_url: "https://pbs.twimg.com/profile_images/1608249800868208641/h7QhilvS_normal.jpg",
		profile_banner_url: "https://pbs.twimg.com/profile_banners/1444091590507700225/1640010382",
		tweetExID: "1789793266491113938",
		text: "Este es un tweet de prueba"
	}
];

const $$Astro$3 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/Lautaro/Desktop/CODIGO/ASTRO/twitter-api/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$2 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])}  </body> </html>`;
}, "C:/Users/Lautaro/Desktop/CODIGO/ASTRO/twitter-api/src/layouts/Layout.astro", void 0);

const $$Astro$1 = createAstro();
const $$IndexLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$IndexLayout;
  const { title } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "data-astro-cid-35iyashb": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="w-4/5 h-5/6 rounded-md shadow shadow-slate-300 p-8 overflow-y-hidden" data-astro-cid-35iyashb> ${renderSlot($$result2, $$slots["default"])} </main> ` })} `;
}, "C:/Users/Lautaro/Desktop/CODIGO/ASTRO/twitter-api/src/layouts/IndexLayout.astro", void 0);

function TweetBoardLoading() {
  return /* @__PURE__ */ jsxs("div", { className: "absolute -translate-x-1/2 left-1/2 mt-20 flex flex-col gap-4 items-center w-max", children: [
    /* @__PURE__ */ jsx("div", { className: "spinner" }),
    /* @__PURE__ */ jsx("h3", { className: "text-lg", children: "Loading tweet. Wait a moment" })
  ] });
}

function ImageLoaded({ user }) {
  const [loaded, setLoaded] = useState(false);
  const handleLoadImage = () => {
    setLoaded(true);
  };
  return /* @__PURE__ */ jsxs("div", { className: "h-full w-full", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: user.user.profile_banner_url,
        alt: user.user.name,
        onLoad: handleLoadImage,
        className: "object-cover w-full h-full",
        style: {
          opacity: loaded ? "1" : "0",
          transition: "all .2s ease-in-out",
          borderRadius: "2rem 2rem 0 0",
          position: loaded ? "relative" : "absolute"
        }
      }
    ),
    !loaded && /* @__PURE__ */ jsx("section", { className: "w-full h-full flex justify-center items-center", children: /* @__PURE__ */ jsx("div", { className: "spinner" }) })
  ] });
}
function TweetBoardLoaded({ user }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("header", { className: "relative h-2/5 w-full", children: /* @__PURE__ */ jsx(ImageLoaded, { user }) }),
    /* @__PURE__ */ jsx("section", { className: "h-full w-full flex justify-center pt-10 ", children: /* @__PURE__ */ jsxs("article", { className: "w-3/4 h-max p-6 rounded-2xl bg-white shadow-lg shadow-slate-500", children: [
      /* @__PURE__ */ jsxs("section", { className: "flex gap-2 items-center", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: user.user.profile_pic_url,
            alt: user.user.name,
            className: "h-10 w-10 rounded-full"
          }
        ),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-bold userText", children: user.user.name }),
          /* @__PURE__ */ jsxs("p", { className: "font-light text-grey userText", children: [
            "@",
            user.user.username
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { children: user.text })
    ] }) })
  ] });
}

function TweetBoardHandeler({ user }) {
  const handleFetch = async () => {
    const url = `https://twitter154.p.rapidapi.com/tweet/details?tweet_id=${user.tweetExID}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "f21dbb1ea7mshbc36ea4c31da0e2p1012b5jsne3e9c888090a",
        "X-RapidAPI-Host": "twitter154.p.rapidapi.com"
      }
    };
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      return result;
    } catch (error2) {
      return error2;
    }
  };
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["tweet"],
    queryFn: handleFetch
  });
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    error && /* @__PURE__ */ jsx("h1", { children: "Error fetching data" }),
    isLoading || isFetching ? /* @__PURE__ */ jsx(TweetBoardLoading, {}) : /* @__PURE__ */ jsx(TweetBoardLoaded, { user: JSON.parse(data) })
  ] });
}

const queryClient = new QueryClient();
function TweetBoard({ user }) {
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(TweetBoardHandeler, { user }) });
}

const $$Astro = createAstro();
function getStaticPaths() {
  const idPaths = dataUsers.map((user) => {
    return { params: { id: user.user_id } };
  });
  return idPaths;
}
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const currentUser = dataUsers.find((user) => user.user_id === id);
  return renderTemplate`${renderComponent($$result, "IndexLayout", $$IndexLayout, { "title": `Tweet - ${currentUser.name}`, "data-astro-cid-p5zaeqd4": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="fixed h-screen w-screen top-0 left-0" data-astro-cid-p5zaeqd4> <div class="absolute h-3/5 w-3/5 top-0 left-1/2 -translate-x-1/2 mt-10 bg-slate-300 shadow-md shadow-slate-800" id="tweet-container" data-astro-cid-p5zaeqd4${addAttribute(renderTransition($$result2, "ko6ol7r4", "", `tweetboard ${id}`), "data-astro-transition-scope")}> <div class="relative h-full w-full flex flex-col" data-astro-cid-p5zaeqd4> <button class="absolute top-0 right-0 m-3 z-10 bg-blue-400 h-10 w-max rounded-full text-center grid items-center hover:scale-110 transition-all" data-astro-cid-p5zaeqd4> <a href="/" class="text-white w-full h-full rounded-full flex justify-center items-center text-center" data-astro-cid-p5zaeqd4> <span class="px-2 font-bold" data-astro-cid-p5zaeqd4>Menu</span> </a> </button> ${renderComponent($$result2, "TweetBoard", TweetBoard, { "user": currentUser, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Lautaro/Desktop/CODIGO/ASTRO/twitter-api/src/components/TweetBoard.jsx", "client:component-export": "default", "data-astro-cid-p5zaeqd4": true })} </div> </div> </section> ` })} `;
}, "C:/Users/Lautaro/Desktop/CODIGO/ASTRO/twitter-api/src/pages/[id].astro", "self");

const $$file = "C:/Users/Lautaro/Desktop/CODIGO/ASTRO/twitter-api/src/pages/[id].astro";
const $$url = "/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$id,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$IndexLayout as $, _id_ as _, dataUsers as d };
