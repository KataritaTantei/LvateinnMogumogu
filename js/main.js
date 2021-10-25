"use strict";

let fileHandle;

async function getFile() {
    // ファイルピッカーを開く
    [fileHandle] = await window.showOpenFilePicker();

    if(fileHandle.kind === 'file') {
        // ファイルを開いた時の処理
        console.log('ファイルを開いたよ！');
    } else if(fileHandle.kind === 'directory') {
        // ディレクトリを開いた時の処理
        console.log('ディレクトリを開いたよ！')
    }
}