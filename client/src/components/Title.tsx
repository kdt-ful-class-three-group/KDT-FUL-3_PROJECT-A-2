type TitleProps = {
  title: string;
};
export default function Title({ title }: TitleProps) {
  return (
    <div className="w-[95%] flex items-center justify-center relative m-auto p-5">
      <img className="absolute left-0" src="./image/leftArrow.svg" alt="이전버튼" />
      <h2 className="text-[#FC4F00] text-2xl font-bold">{title}</h2>
      <div className="absolute right-0">
        {/* 북마크 */}
        <img src="./image/titlebookmark.svg" alt="별" />
        {/* 사전 */}
        {/* <img src="" alt="" /> */}
      </div>
    </div>
  );
}
