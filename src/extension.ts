import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    // Command for context menu
    const disposableContextMenu = vscode.commands.registerCommand(
        'labelExplorer.manageLabelsContextMenu',
        (uri: vscode.Uri) => {
            // uri is the file or folder on which the context menu was invoked
            vscode.window.showInputBox({ prompt: 'Enter labels' }).then((value) => {
                console.log({ uri, value });
                // Handle the entered labels here
                // You might want to store these labels in a map or a file
            });
        },
    );

    // Command for command palette
    const disposableCommandPalette = vscode.commands.registerCommand(
        'labelExplorer.manageLabelsCommandPalette',
        () => {
            vscode.window
                .showQuickPick(getFileFolderList(), {
                    placeHolder: 'Select a file or folder to label',
                })
                .then((selection) => {
                    if (selection) {
                        vscode.window
                            .showInputBox({ prompt: `Enter labels for ${selection.label}` })
                            .then((value) => {
                                console.log(value);
                                // Handle the entered labels here
                                // You might want to store these labels in a map or a file
                            });
                    }
                });
        },
    );

    context.subscriptions.push(disposableContextMenu);
    context.subscriptions.push(disposableCommandPalette);
}

export function deactivate() {}

function getFileFolderList(): Thenable<vscode.QuickPickItem[]> {
    // Implement logic here to retrieve and return files/folders as QuickPickItems
    // This can be a list of files/folders from the current workspace

    return new Promise((resolve) => resolve([]));
}
