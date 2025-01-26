import { styled } from "..";

export const Skeleton = styled('div', {
  background: '$gray800',
  borderRadius: 8,
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',

  '@sm': {
    height: '480px'
  }
})