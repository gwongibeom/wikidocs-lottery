const URL: string = 'https://wikidocs.net/api/v1/comment/list';

interface IData {
  comment_list: IComment[];
  total: number;
}

interface ICommentAPIResult {
  code: string;
  data?: IData;
}

interface IComment {
  content: string;
  create_time: string;
  email: string;
  id: number;
  name: string;
}

const useGetPageComments = async (id: number | string): Promise<ICommentAPIResult> => {
  try {
    const response = await fetch(`${URL}?page_no=${id}&page=1&size=9999`);

    if (!response.ok) {
      return { code: 'error' };
    }

    const json = await response.json();
    return { data: json, code: 'success' };
  } catch (error) {
    return { code: 'error' };
  }
};

export default useGetPageComments;
