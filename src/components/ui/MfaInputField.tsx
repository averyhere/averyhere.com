"use client"

import { 
  useRef, 
  useEffect, 
  useState, 
  type ChangeEvent, 
  type FocusEvent, 
  type ClipboardEvent, 
  type KeyboardEvent 
} from "react"
import { PiXDuotone } from "react-icons/pi";

export default function MfaInputField({ callback, reset, isLoading }: { callback: (code: string)=>void, reset?: ()=>void, isLoading: boolean }) {

  const [code, setCode] = useState('');

  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ]

  const resetCode = () => {
    inputRefs.forEach(ref => {
      ref.current!.value = '';
    });
    inputRefs[0].current!.focus();
    setCode('');
  }

  useEffect(() => {
    if (code.length === 6) {
      if (typeof callback === 'function') callback(code);
      resetCode();
    }
  }, [code]);

  useEffect(() => {
    resetCode();
  }, [reset]);

  const handleInput = (e: ChangeEvent<HTMLInputElement>, index: number) => {
      const input = e.target;
      const previousInput = inputRefs[index - 1];
      const nextInput = inputRefs[index + 1];

      // Update code state with single digit
      const newCode = [...code];
      
      // Convert lowercase letters to uppercase
      if (/^[a-z]+$/.test(input.value)) {
          const uc = input.value.toUpperCase();
          newCode[index] = uc;
          inputRefs[index].current!.value = uc;
      } else {
          newCode[index] = input.value;
      }
      setCode(newCode.join(''));

      input.select();

      if (input.value === '') {
          // If the value is deleted, select previous input, if exists
          if (previousInput) {
              previousInput.current!.focus();
          }
      } else if (nextInput) {
          // Select next input on entry, if exists
          nextInput.current!.select();
      }
  }

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    e.target.select();
  }

  // Handle the backspace key
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    const input = e.target as HTMLInputElement;
    const previousInput = inputRefs[index - 1];
    const nextInput = inputRefs[index + 1];

    if ((e.code === '8' || e.code === '46') && input.value === '') {
      e.preventDefault();
      setCode((prevCode) => prevCode.slice(0, index) + prevCode.slice(index + 1));
      if (previousInput) {
        previousInput.current!.focus();
      }
    }
  }

  // 123456
  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedCode = e.clipboardData.getData('text');
    if (pastedCode.length === 6) {
      setCode(pastedCode);
      inputRefs.forEach((inputRef, index) => {
        (inputRef.current as HTMLInputElement).value = pastedCode.charAt(index);
      });
    }
  }

  return (
    <div className="flex flex-col gap-2 items-end">
      <div className="flex gap-2">
        {[0, 1, 2, 3, 4, 5].map((index) => (
          <input
            key={index}
            className="bg-purple/20 p-2 border border-purple text-center w-full"
            type="text"
            maxLength={1}
            onChange={(e) => handleInput(e, index)}
            ref={inputRefs[index]}
            autoFocus={index === 0}
            onFocus={handleFocus}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={handlePaste}
            disabled={isLoading}
          />
        ))}
      </div>
      <button className='text-purple dark:text-purple flex text-xs items-center cursor-pointer hover:text-bright-purple' type="reset" onClick={resetCode} title="Clear">
        <PiXDuotone className="size-4" /> Clear
      </button>
    </div>
  )

}