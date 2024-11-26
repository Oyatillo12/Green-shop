const LogIcon = () => {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.1601 9.10057H7.12598" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.7212 6.67059L17.1612 9.10059L14.7212 11.5306" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12.6342 5.35823C12.3592 2.3749 11.2425 1.29156 6.80082 1.29156C0.883322 1.29156 0.883322 3.21656 0.883322 8.9999C0.883322 14.7832 0.883322 16.7082 6.80082 16.7082C11.2425 16.7082 12.3592 15.6249 12.6342 12.6416" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
};
const CloseIcon = () => {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M3.17007 3.17007C3.39682 2.94331 3.76447 2.94331 3.99122 3.17007L9 8.17884L14.0088 3.17007C14.2355 2.94331 14.6032 2.94331 14.8299 3.17007C15.0567 3.39682 15.0567 3.76447 14.8299 3.99122L9.82116 9L14.8299 14.0088C15.0567 14.2355 15.0567 14.6032 14.8299 14.8299C14.6032 15.0567 14.2355 15.0567 14.0088 14.8299L9 9.82116L3.99122 14.8299C3.76447 15.0567 3.39682 15.0567 3.17007 14.8299C2.94331 14.6032 2.94331 14.2355 3.17007 14.0088L8.17884 9L3.17007 3.99122C2.94331 3.76447 2.94331 3.39682 3.17007 3.17007Z" fill="#46A358" />
        </svg>
    )
}

export { LogIcon, CloseIcon }