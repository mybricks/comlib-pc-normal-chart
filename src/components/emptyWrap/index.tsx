import React from 'react';
import { Empty } from 'antd';
import css from './style.less';

interface Props {
  isEmpty: boolean;
  emptyText?: string;
  small?: boolean;
  children: React.ReactElement<any, any>;
}
export default (props: Props) => {
  const { isEmpty, emptyText, small, children } = props;
  if (isEmpty) {
    return (
      <div className={css.emptyWrap}>
        <Empty
          description={emptyText}
          image={small ? Empty.PRESENTED_IMAGE_SIMPLE : Empty.PRESENTED_IMAGE_DEFAULT}
        />
      </div>
    );
  }
  return children;
};
