interface cardProps {
    id: string;
    name: string;
    imageUrl: string;
    description: string;
    price: number;
}

interface buttonProps {
    text: string; 
    onClick: () => void;
    disabled?: boolean;
}


