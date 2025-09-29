export function TarunpreetSinghMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 512 256"
      {...props}
    >
      <path
        fill="currentColor"
        d="M64 0h384v64H192v64h256v64H192v64h256v64H64V128h128V64H64V0Z"
      />
    </svg>
  );
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 256"><path fill="${color}" d="M64 0h384v64H192v64h256v64H192v64h256v64H64V128h128V64H64V0Z"/></svg>`;
}
