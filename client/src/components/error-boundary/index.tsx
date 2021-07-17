import { Component, ErrorInfo, ReactNode } from "react";
import styled from 'styled-components';
import Illustration from '../../assets/ErrorIllustration.png'

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
          <ErrorImageOverlay>
              <ErrorImageContainer imageUrl={Illustration} />
              <ErrorImageText>Sorry, Something went Wrong!</ErrorImageText>
          </ErrorImageOverlay>
      )
    }

    return this.props.children;
  }
}



const ErrorImageOverlay = styled.div`
  height: 70vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ErrorImageContainer = styled.div`
  display: inline-block;
  background-image: ${({ imageUrl }: {imageUrl: string}) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  width: 40vh;
  height: 40vh;
`;

const ErrorImageText = styled.h2`
  font-size: 28px;
  color: #2f8e89;
`;


export default ErrorBoundary;

