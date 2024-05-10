import { useEffect } from 'react';

const useSetTitle = (title: string) => {
  useEffect(() => {
    const $title = document.getElementsByTagName('title')[0];
    $title.innerText = `위키독스 댓글 추첨기 | ${title}`;
  }, [title]);
};

export default useSetTitle;
