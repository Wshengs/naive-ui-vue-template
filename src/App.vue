<template>
    <n-config-provider :theme-overrides="themeOverrides" :locale="zhCN" class="h100">
        <n-layout class="h100">
            <n-layout-header>
                <div class="content">
                    <span class="logo">{{ name }}</span> <span style="color: #888; margin-right: 50px"></span>
                    <n-menu mode="horizontal" :options="menuOptions" />
                </div>
            </n-layout-header>
            <n-layout
                position="absolute"
                style="top: 42px; bottom: 0"
                :native-scrollbar="false"
                content-style="overflow-x: auto"
                ref="layoutRef"
            >
                <div class="content" style="min-height: 600px; padding: 20px; box-sizing: border-box">
                    <n-message-provider>
                        <n-dialog-provider>
                            <router-view></router-view>
                        </n-dialog-provider>
                    </n-message-provider>
                </div>
                <n-layout-footer>
                    <div class="content" style="text-align: center; padding-bottom: 30px">fastui.dev</div>
                </n-layout-footer>
            </n-layout>
        </n-layout>
        <n-modal :mask-closable="false" v-model:show="showModal">
            <n-dialog
                title="版本更新："
                content="有最新版本,请更新!"
                :closable="false"
                positive-text="确认"
                @positive-click="handlePositiveClick"
            />
        </n-modal>
    </n-config-provider>
</template>

<script lang="ts">
import { defineComponent, h, ref, watch, provide, onMounted } from 'vue'
import { zhCN, NLayout } from 'naive-ui'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { getVersion } from '@/api'
const menuOptions = [
    {
        label: () =>
            h(
                RouterLink,
                {
                    to: {
                        name: 'HelloWorld'
                    }
                },
                { default: () => '首页' }
            ),
        key: 'HelloWorld'
    }
]

/**
 * @type import('naive-ui').GlobalThemeOverrides
 */
const themeOverrides = {
    common: {
        primaryColor: '#57518f',
        primaryColorHover: '#3c3cd8',
        textColor1: '#666',
        textColor2: '#666',
        textColor3: '#999'
    },
    Menu: {
        itemTextColor: '#999',
        itemTextColorHover: '#fff',
        itemTextColorActive: '#fff'
    }
}
export default defineComponent({
    setup() {
        let layoutRef = ref<InstanceType<typeof NLayout> | null>(null)
        const route = useRoute()
        const router = useRouter()
        let showModal = ref(false)
        router.beforeEach(async (to, from, next) => {
            if (import.meta.env.PROD) {
                await getVersion().then((res) => {
                    // @ts-ignore
                    if (__APP_VERSION__ !== res.version) {
                        showModal.value = true
                        return true
                    }
                    return false
                })
            }
            next()
        })
        watch(
            () => route.fullPath,
            () => {
                layoutRef.value?.scrollTo({ left: 0, top: 0 })
            }
        )
        onMounted(() => {
            provide('scrollTo', layoutRef.value?.scrollTo)
        })
        return {
            menuOptions,
            themeOverrides,
            zhCN,
            showModal,
            layoutRef,
            handlePositiveClick() {
                window.location.reload()
            }
        }
    }
})
</script>
<style>
html,
body,
#app {
    height: 100%;
}
</style>
<style scoped>
.logo {
    color: #fff;
    font-weight: bold;
    margin-right: 0;
    font-size: 15px;
    padding-left: 20px;
}

.n-layout-header {
    background: #292961;
}

.n-layout-footer {
    background: #fff;
}

.content {
    width: 1200px;
    margin: 0 auto;
}
</style>
