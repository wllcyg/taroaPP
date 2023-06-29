import {defineConfig, UserConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {resolve} from 'path';

// 定义配置文件类型
interface MyConfig extends UserConfig {
    resolve: {
        alias: Record<string, string>;
    };
}

const config: MyConfig = {
    plugins: [react()],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
};

export default defineConfig(config);
