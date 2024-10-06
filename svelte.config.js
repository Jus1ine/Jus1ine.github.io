import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),

    kit: {
        adapter: adapter({ pages: "build", assets: "build", fallback: undefined, precompress: false, strict: true }),
        prerender: {
            handleHttpError: 'warn' // You can also use 'continue' or 'ignore' based on your needs
        }
    },
};

export default config;
