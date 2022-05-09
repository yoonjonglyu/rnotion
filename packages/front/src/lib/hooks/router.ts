import { useNavigate } from 'react-router-dom';

function useRouter() {
  const navigate = useNavigate();

  /**
   * 모든 hooks는 리액트 컴포넌트 내부에서 호출 되어야한다.
   * useNavigate훅 역시 마찬가지이고 컴포넌트 리렌더링시 그때마다 해당 hook이 반환해주는 
   * 객체가 다시 생성되는데 해당 부분을 useMemo로 최적화한 코드를 보았다. 그게 어느 정도 의미가 있을까?
   * 해당 최적화에 드는 비용이 리렌더링 비용 보다 클까? 차라리 hook을 쪼개서 필요한 컨텍스트 내부에서만 호출하는게 더 적합하지 않을까?
   * 모르겠다. 이런점은 직접 벤치마크 해보기 전까지 짐작만 갈뿐이니까.
   */
  return {
    push: (path: string) => {
      navigate(path);
    },
  };
}

export default useRouter;
