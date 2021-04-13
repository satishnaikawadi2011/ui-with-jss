export const getStylesFromClassName = (className: string): string => {
    let result = '';
	const cssClassPattern = /\.-?[_a-zA-Z]+[_a-zA-Z0-9-]*\s*\{/;
	// const cssClassWithPseudoPattern = /\..*:[a-z].*\{.*\}/;
	const sheets = Array.from(window.document.styleSheets);
	// console.log(className!.split(' ').map((name) => name.trim()));
    sheets.forEach((sheet) => {
		const cssRules = Array.from(sheet.cssRules);
        cssRules.forEach((cssRule) => {
            if ((cssClassPattern.test(cssRule.cssText) && cssRule.cssText.includes(`.${className} {`)) ) {
					
                result = cssRule?.cssText?.split('{')[1]?.split('}')[0];
				}
		});
    });
    return result;
};
