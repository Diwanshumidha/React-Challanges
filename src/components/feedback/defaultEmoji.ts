export const emojis = [
	{
		name: "Positive Feedback",
		emoji: "😊",
		description: "Great job! I liked this.",
		value: 2,
	},
	{
		name: "Constructive Feedback",
		emoji: "🤔",
		description: "Interesting, but needs improvement.",
		value: 1,
	},
	{
		name: "Neutral Feedback",
		emoji: "😐",
		description: "It’s okay, nothing special.",
		value: 0,
	},
	{
		name: "Confused Feedback",
		emoji: "😕",
		description: "I didn’t understand this.",
		value: -1,
	},
	{
		name: "Negative Feedback",
		emoji: "😡",
		description: "Didn’t like this at all.",
		value: -2,
	},
] satisfies Emoji[];


export type Emoji = {
	emoji: string;
	value: number;
	description: string;
	name: string;
}