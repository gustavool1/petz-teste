import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0); /* Semi-transparent overlay */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2; /* Ensure the modal is above everything else */
`

export const Container = styled.div`
  width: 408px;
  border: 1px solid #df8686;
  border-radius: 8px;
  background-color: white;
  height: 255px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 90%;
    height: 285px;
    max-width: 400px;
  }
`

export const ModalTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  margin-top: 20px;
`

export const Message = styled.p`
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  color: #747474;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 0px 30px;
`
export const SubLink = styled.a`
  &:visited {
    color: var(--color-primary);
  }
`
