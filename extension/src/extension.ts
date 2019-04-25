// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import vscode from "vscode";
import { ReactPanel } from "./ReactPanel";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "vs-review" is now active!');

  const start = vscode.commands.registerCommand("vsr.start", () => {
    ReactPanel.createOrShow(context.extensionPath);
  });

  context.subscriptions.push(start);
}

// this method is called when your extension is deactivated
export function deactivate() {}
