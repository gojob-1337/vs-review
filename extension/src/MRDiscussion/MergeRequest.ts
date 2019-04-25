export class MergeRequest {
  discussions: any[];

  constructor() {}

  static create(payload: any[]): MergeRequest {
    const mergeRequest = new MergeRequest();
    mergeRequest.discussions = payload.map(discussion => ({
      id: discussion.id,
      messages: discussion.notes.map((note: any) => ({
        id: note.id,
        content: note.body,
        author: note.author.name,
      })),
    }));

    return mergeRequest;
  }
}
