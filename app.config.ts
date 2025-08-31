import {defineConfig, UserConfig} from "vite";
import solidPlugin from "vite-plugin-solid";
import purgeCSS from "vite-plugin-purgecss"
import UnoCSS from "unocss/vite"
import {layoutPreset} from "./src/style/layout";
import presetAttributify from "@unocss/preset-attributify";
import {transformerAttributifyJsx} from "unocss";

export const viteConfig: UserConfig = {
    plugins: [
        UnoCSS({
            presets: [
                layoutPreset,
                presetAttributify()],
            transformers: [
                transformerAttributifyJsx()
            ]
        }),
        solidPlugin(),
        // @ts-ignore
        purgeCSS()
    ],
    build: {
        target: 'esnext',
        rollupOptions: {
            output: {
                manualChunks() {
                    return "index"
                }
            }
        }
    },
}

export default defineConfig(viteConfig)
