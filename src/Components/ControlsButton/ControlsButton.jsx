import styles from './ControlsButton.module.scss';

export function ControlsButton({ content, handleControlsClick, className }) {
    return (
        <>
            <button
                className={`${styles.controlsButton} ${className ?? ''}`}
                onClick={handleControlsClick}
            >
                <h4>{content}</h4>
            </button>
        </>
    );
}
