// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/66c9d1c4ba7246540618d831355eaf2ced60d48e/requirejs/require.d.ts
declare module 'chanjet-reports-designer' {

	import React = __React;

	interface ReportDesignerProps{
		config: any;
		model:any;
		dataSource:any;
		uploadImage: any;
		onReportChange: any
	}


	export class ReportDesigner extends React.Component<ReportDesignerProps, {}> {

	};

	export class DataSource{
		name: string;
		displayText: string;
		description: string;
		entryTableNames: Array<any>;
		addTable(item: any);
	};
	export class DataTable{
		name: string;
		displayText: string;
		fields: Array<any>;
		relations: Array<any>;
	};
	export enum DataTypeEnum{
		String = 0,
		Integer,
		Long,
		Number,
		Boolean,
		DateTime,
		Image
	};
	export class DataField{
		name: string;
		displayText: string;
		dataType: any;
		parent: any
	};
	export class DataRelation{
		constructor(name: string, id: string);
	};
	export class DataRelationShip{
		constructor(parent:any, child: any);
		name: string;
		parent: any;
	};
	export class ReportDesignMode{
		static ChineseTable: any
	};
}
