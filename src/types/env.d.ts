declare module '*.vue' {
    import { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}
interface ImportMetaEnv {
    readonly VITE_VUE_APP_API: string
    readonly VITE_OUTPUT_DIR: string
    readonly VITE_PUBLIC_PATH: string
}
interface ImportMeta {
    readonly env: ImportMetaEnv
}
