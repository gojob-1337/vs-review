import React, { FunctionComponent } from 'react';

import { MergeRequest } from 'vs-review.extension';

export const MergeRequestList: FunctionComponent<{ data: MergeRequest }> = props => {
  return <div>{props.data.discussions && 'there is'}</div>;
};
