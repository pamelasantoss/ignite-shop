import { transform } from "next/dist/build/swc/generated-native";
import { styled } from "..";

export const HomeContainer = styled('main', {
  display: 'flex',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px)) / 2)',
  marginLeft: 'auto',
  minHeight: '100%',

  '@lg': {
    minHeight: '80vh'
  }
})