// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import vscode from 'vscode';
import { ReactPanel } from './ReactPanel';
import { MergeRequestService } from './MRDiscussion/MergeRequestService';

import git from 'nodegit';
import Axios from 'axios';
import { GitlabMergeRequest } from './MRDiscussion/GitlabMergeRequest';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "vs-review" is now active!');

  const start = vscode.commands.registerCommand('vsr.start', () => {
    ReactPanel.createOrShow(context.extensionPath);
  });
  context.subscriptions.push(start);

  const gitlabAxiosInstance = Axios.create({
    baseURL: 'https://gitlab.com/api/v4',
    headers: { 'PRIVATE-TOKEN': 'sEYanNr1Mtn7C_iC2GGz' },
  });

  const remoteMergeRequest = new GitlabMergeRequest(gitlabAxiosInstance);

  const mergeRequestService = new MergeRequestService(remoteMergeRequest);

  const showMergeRequest = vscode.commands.registerCommand('vsr.merge-request.show', async () => {
    const currentRepository = await git.Repository.open(vscode.workspace.rootPath);

    const currentBranchRef = await currentRepository.getCurrentBranch();

    const mergeRequest = await mergeRequestService.getMergeRequestForBranch(currentBranchRef.shorthand());

    const showMergeRequestCommand = { name: 'show-merge-request', payload: mergeRequest };

    ReactPanel.currentWebview.postMessage(showMergeRequestCommand);
  });
  context.subscriptions.push(showMergeRequest);
}

// this method is called when your extension is deactivated
export function deactivate() {}

/**
 * Get Merge Request from gitlab
 * setup workspace to display app
//  * Set app to the view where it show the list
//  * provide list data
 *
 */
