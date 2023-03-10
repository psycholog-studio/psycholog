import {
  useRef,
  useState,
  KeyboardEventHandler,
  MouseEventHandler,
  useCallback,
  ChangeEventHandler,
} from 'react';
import * as styles from './Terminal.styles';
import { cx } from '@emotion/css';

export type Info = {
  user: string;
  host: string;
  path: string;
};

export interface TerminalProps {
  info?: Info;
}

const Terminal = (props: TerminalProps) => {
  const { info: inInfo } = props;
  const info = { ...inInfo, user: 'root', host: 'localhost', path: '~' };

  const [command, setCommand] = useState('');
  const [commandLines, setCommandLines] = useState<string[]>([]);
  const cmdHistory = useRef<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const historyIndex = useRef(-1);
  const infoText = `${info?.user}@${info?.host}:${info?.path}$ `;

  const fullText = `${infoText}${command}`;

  const rootElementCallback = useCallback((element: HTMLDivElement) => {
    if (element) {
      element.addEventListener('click', () => {
        element.focus();
      });
    }
  }, []);

  const handleKeydown: KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();

      if (historyIndex.current > 0) {
        historyIndex.current--;
        setCommand(cmdHistory.current[historyIndex.current]);
      } else {
        historyIndex.current = -1;
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();

      if (
        cmdHistory.current.length > 0 &&
        historyIndex.current < cmdHistory.current.length - 1
      ) {
        historyIndex.current++;
        setCommand(cmdHistory.current[historyIndex.current]);
      } else {
        historyIndex.current = -2;
      }
    } else if (e.key === 'Enter') {
      setCommandLines((prevCommandLines) => [...prevCommandLines, fullText]);
      cmdHistory.current.push(command);
      setCommand('');
    }
  };

  const handleClick: MouseEventHandler<HTMLDivElement> = () => {
    inputRef.current?.focus();
  };

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setCommand(e.target.value);
  };

  return (
    <div
      ref={rootElementCallback}
      id="terminal-container"
      className={styles.root}
      onClick={handleClick}
    >
      {commandLines.map((line, index) => {
        return <p key={index}>{line}</p>;
      })}
      <p>
        <span>{infoText}</span>
        <input
          className={styles.input}
          ref={inputRef}
          value={command}
          onChange={handleInputChange}
          onKeyDown={handleKeydown}
        />
        <span
          className={cx(styles.terminalInput, 'terminal-input')}
          dangerouslySetInnerHTML={{
            __html: command.replace(/ /g, '&nbsp;'),
          }}
        ></span>
      </p>
    </div>
  );
};

export default Terminal;
