import request from "./request.ts";

export function login(params: object) {
    return request.get('comment/music', params)
}

export function sentCaptcha(params: object) {
    return request.get('/captcha/sent', params)
}
