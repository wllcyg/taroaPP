import request from "./request.ts";

export function musicList(params: object) {
    return request.get('comment/music', params)
}

export function sentCaptcha(params: object) {
    return request.get('/captcha/sent', params)
}
// /top/artists?offset=0&limit=30
