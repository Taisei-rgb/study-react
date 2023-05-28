import { useCallback, useState } from "react";

export const useInputArray = () => {
	const [text, setText] = useState("");
	const [array, setArray] = useState<string[]>([]);

	const hundleChange = useCallback((e: any) => {
		if (e.target.value.length >= 5) {
			alert("5文字以下にしてください。");
			return;
		}
		setText(e.target.value.trim());
	}, []);

	const hundleAdd = useCallback(() => {
		setArray((prevArray) => {
			return [...prevArray, text];
		});
	}, [text]);

	return { text, array, hundleChange, hundleAdd };
};
