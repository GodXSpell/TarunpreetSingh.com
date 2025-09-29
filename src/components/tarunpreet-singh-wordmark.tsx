export function TarunpreetSinghWordmark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 512 256"
      {...props}
    >
      <path
        fill="currentColor"
        d="M64 0h384v64H256v192h-64V64H64V0ZM384 96h64v160h-64V128h-32v128h-64V96h96Z"
      />
    </svg>
  );
}

export function getWordmarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 256"><path fill="${color}" d="M64 0h384v64H256v192h-64V64H64V0ZM384 96h64v160h-64V128h-32v128h-64V96h96Z"/></svg>`;
}
