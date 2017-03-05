import $ from 'webpack-zepto';

export function fetch(url, params = {}, method = 'GET') {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: url,
            data: params,
            method: method
        }).done((resp) => {
            resolve();
        }).fail((resp) => {
            reject();
        });
    });
}
