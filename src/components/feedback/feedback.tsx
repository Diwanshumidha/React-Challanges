// components/feedback/Feedback.tsx
import { cn } from "@/lib/utils";
import { MessagesSquareIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Separator } from "../ui/separator";
import { Textarea } from "../ui/textarea";
import { type Emoji, emojis } from "./defaultEmoji";

type FeedbackProps = {
    title?: string;
    description?: string;
    submitLabel?: string;
    onSubmit: (emoji: Emoji, message: string) => void;
};

const Feedback = ({
    title = "How are you feeling?",
    description = "Your input is valuable. Let us know how you're doing!",
    submitLabel = "Submit Your Experience",
    onSubmit,
}: FeedbackProps) => {
    const [selectedEmoji, setSelectedEmoji] = useState<Emoji>(emojis[Math.floor(emojis.length / 2)]);
    const [message, setMessage] = useState("");

    const handleSubmit = () => {
        if (!message.trim()) return;
        onSubmit(selectedEmoji, message);
        setMessage(""); 
    };

    return (
        <Card className="xl:min-w-[600px]">
            <CardHeader className="space-y-2">
                <Header />
                <Separator />
                <div className="text-center mt-4 space-y-2">
                    <h2 className="text-3xl font-semibold">{title}</h2>
                    <p className="text-gray-800 text-balance">{description}</p>
                </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-5">
                <EmojiSelector selectedEmoji={selectedEmoji} onSelectEmoji={setSelectedEmoji} />
                <Textarea
                    placeholder="Write about your experience..."
                    className="resize-none"
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <Button className="w-full" onClick={handleSubmit}>
                    {submitLabel}
                </Button>
            </CardContent>
        </Card>
    );
};

export default Feedback;

const Header = () => (
    <div className="flex items-center gap-2">
        <div className="p-3 rounded-full bg-black text-white">
            <MessagesSquareIcon className="size-5" />
        </div>
        <p className="text-xl font-semibold">Feedback</p>
    </div>
);


type Props = {
    selectedEmoji: Emoji;
    onSelectEmoji: (emoji: Emoji) => void;
};

const EmojiSelector = ({ selectedEmoji, onSelectEmoji }: Props) => {
    return (
        <div className="flex justify-center items-center gap-5 min-h-[100px]">
            {emojis.map((emoji) => (
                <button
                    key={emoji.value}
                    onClick={() => onSelectEmoji(emoji)}
                    type="button"
                    className={cn(
                        "text-5xl hover:text-7xl duration-300 hover:grayscale-0 cursor-pointer transition-all grayscale-100",
                        selectedEmoji.value === emoji.value && "grayscale-0 text-7xl"
                    )}

                    style={{
                        rotate: `${Math.floor(Math.random() * 50) - 25}deg`
                    }}
                    aria-label={emoji.name}
                >
                    {emoji.emoji}
                </button>
            ))}
        </div>
    );
};

