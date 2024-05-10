const URL: string = 'https://wikidocs.net/api/v1/page';

interface result {
  title: string;
  code: 'success' | 'error';
}

const useCheckPageId = async (id: number | string): Promise<result> => {
  try {
    const response = await fetch(`https://proxy.cors.sh/${URL}/${id}`, {
      headers: {
        'x-cors-api-key': 'temp_1875e976e3284f84d6a2deaf253d3ba5',
      },
    });

    if (!response.ok) {
      return { title: '😭 페이지 번호가 맞는지 다시 확인해주세요!', code: 'error' };
    }

    const json = await response.json();
    return { title: `👍 조회성공! ${json.subject}`, code: 'success' };
  } catch (error) {
    return { title: '😭 페이지 번호가 맞는지 다시 확인해주세요!', code: 'error' };
  }
};

export default useCheckPageId;
