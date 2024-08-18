// src/components/Modal/Modal.tsx
import React from "react";
import "./Modal.css";

interface ModalProps {
    title: string;
    isVisible: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export const Modal = ({title, isVisible, onClose, children}: ModalProps) => {
    if (!isVisible) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h4>{title}</h4>
                    <button className="modal-close" onClick={onClose}>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M21.4143 20L26.7073 14.7069C27.0983 14.3169 27.0983 13.683 26.7073 13.293C26.3163 12.902 25.6842 12.902 25.2933 13.293L20.0003 18.586L14.7073 13.293C14.3163 12.902 13.6842 12.902 13.2932 13.293C12.9022 13.683 12.9022 14.3169 13.2932 14.7069L18.5862 20L13.2932 25.293C12.9022 25.683 12.9022 26.3169 13.2932 26.7069C13.4882 26.9019 13.7443 27 14.0003 27C14.2563 27 14.5123 26.9019 14.7073 26.7069L20.0003 21.414L25.2933 26.7069C25.4882 26.9019 25.7443 27 26.0003 27C26.2563 27 26.5123 26.9019 26.7073 26.7069C27.0983 26.3169 27.0983 25.683 26.7073 25.293L21.4143 20Z"
                                fill="#041213"/>
                        </svg>
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
};