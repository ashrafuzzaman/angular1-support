'use strict';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "angular1-support" is now active!');
    let disposable = vscode.commands.registerCommand('extension.gotoAngularDef', () => {
        const editor = vscode.window.activeTextEditor,
            document = editor.document,
            pos = editor.selection.active;
        let selectedWord = document.getText(document.getWordRangeAtPosition(pos));
        vscode.window.showInformationMessage('Hello World! ' + selectedWord);
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {
}
