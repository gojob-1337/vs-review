import { GitlabDiscussion } from './GitlabDiscussion';

export class MergeRequest {
  discussions: any[];

  static create(payload: GitlabDiscussion[]): MergeRequest {
    const mergeRequest = new MergeRequest();
    mergeRequest.discussions = payload.map(discussion => ({
      id: discussion.id,
      messages: discussion.notes.map(note => ({
        id: note.id,
        content: note.body,
        author: note.author.name,
      })),
    }));

    return mergeRequest;
  }
}
