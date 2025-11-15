import { useCursorifyDispatch } from "react-cursorify";

interface EmojiCursorProps {
    disabled: boolean;
}
const EmojiCursor: React.FC<EmojiCursorProps> = () => {
    const { mouseState, style } = useCursorifyDispatch()

    return (
        <div
            style={{
                width: 40,
                height: 40,
                fontSize: 30,
            }}
        >
            {(() => {
                if (disabled : ) return '🖐️'
            if (mouseState === 'mouseDown') return '✊'
            if (style === 'pointer') return '👆'
            return '🖐️'
            })()}
        </div>
    )
}

export default EmojiCursor