define("PageWithTabsFreedomTemplate", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
    return {
        viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
            {
                "operation": "insert",
                "name": "ProcessesTab",
                "values": {
                    "type": "crt.TabContainer",
                    "items": [],
                    "caption": "#ResourceString(ProcessesTab_caption)#",
                    "iconPosition": "left-icon",
                    "visible": true,
                    "icon": "timeline-icon"
                },
                "parentName": "Tabs",
                "propertyName": "items",
                "index": 1
            },
            {
                "operation": "insert",
                "name": "ProcessesExpansionPanel",
                "values": {
                    "type": "crt.ExpansionPanel",
                    "tools": [],
                    "items": [],
                    "title": "#ResourceString(ProcessesExpansionPanel_title)#",
                    "toggleType": "material",
                    "togglePosition": "before",
                    "expanded": true,
                    "labelColor": "auto",
                    "fullWidthHeader": false,
                    "titleWidth": 20,
                    "padding": {
                        "top": "small",
                        "bottom": "small",
                        "left": "none",
                        "right": "none"
                    },
                    "fitContent": true,
                    "visible": true,
                    "alignItems": "stretch"
                },
                "parentName": "ProcessesTab",
                "propertyName": "items",
                "index": 0
            },
            {
                "operation": "insert",
                "name": "ProcessesToolsContainer",
                "values": {
                    "type": "crt.GridContainer",
                    "rows": "minmax(max-content, 24px)",
                    "columns": [
                        "minmax(32px, 1fr)"
                    ],
                    "gap": {
                        "columnGap": "large",
                        "rowGap": "none"
                    },
                    "styles": {
                        "overflow-x": "hidden"
                    },
                    "items": [],
                    "visible": true,
                    "color": "transparent",
                    "borderRadius": "none",
                    "padding": {
                        "top": "none",
                        "right": "none",
                        "bottom": "none",
                        "left": "none"
                    },
                    "alignItems": "stretch"
                },
                "parentName": "ProcessesExpansionPanel",
                "propertyName": "tools",
                "index": 0
            },
            {
                "operation": "insert",
                "name": "ProcessesToolsFlexContainer",
                "values": {
                    "type": "crt.FlexContainer",
                    "direction": "row",
                    "gap": "none",
                    "alignItems": "center",
                    "items": [],
                    "layoutConfig": {
                        "colSpan": 1,
                        "column": 1,
                        "row": 1,
                        "rowSpan": 1
                    },
                    "visible": true,
                    "color": "transparent",
                    "borderRadius": "none",
                    "padding": {
                        "top": "none",
                        "right": "none",
                        "bottom": "none",
                        "left": "none"
                    },
                    "justifyContent": "start",
                    "wrap": "wrap"
                },
                "parentName": "ProcessesToolsContainer",
                "propertyName": "items",
                "index": 0
            },
            {
                "operation": "insert",
                "name": "ProcessesRefreshButton",
                "values": {
                    "type": "crt.Button",
                    "caption": "#ResourceString(ProcessesRefreshButton_caption)#",
                    "icon": "reload-icon",
                    "iconPosition": "only-icon",
                    "color": "default",
                    "size": "medium",
                    "clicked": {
                        "request": "crt.LoadDataRequest",
                        "params": {
                            "config": {
                                "loadType": "reload"
                            },
                            "refreshDataConfig": {
                                "mode": "RefreshSpecific",
                                "targetDataSourceNames": [
                                    "ProcessesListDS"
                                ]
                            }
                        }
                    },
                    "clickMode": "default",
                    "visible": true
                },
                "parentName": "ProcessesToolsFlexContainer",
                "propertyName": "items",
                "index": 0
            },
            {
                "operation": "insert",
                "name": "ProcessesSettingsButton",
                "values": {
                    "type": "crt.Button",
                    "caption": "#ResourceString(ProcessesSettingsButton_caption)#",
                    "icon": "actions-button-icon",
                    "iconPosition": "only-icon",
                    "color": "default",
                    "size": "medium",
                    "clickMode": "menu",
                    "menuItems": [],
                    "visible": true
                },
                "parentName": "ProcessesToolsFlexContainer",
                "propertyName": "items",
                "index": 1
            },
            {
                "operation": "insert",
                "name": "ProcessesExportDataButton",
                "values": {
                    "type": "crt.MenuItem",
                    "caption": "#ResourceString(ProcessesExportDataButton_caption)#",
                    "icon": "export-button-icon",
                    "color": "default",
                    "size": "medium",
                    "clicked": {
                        "request": "crt.ExportDataGridToExcelRequest",
                        "params": {
                            "viewName": "ProcessesList",
                            "filters": "$GridDetail_20p8vr3 | crt.ToCollectionFilters : 'GridDetail_20p8vr3' : $GridDetail_20p8vr3_SelectionState"
                        }
                    },
                    "visible": true
                },
                "parentName": "ProcessesSettingsButton",
                "propertyName": "menuItems",
                "index": 0
            },
            {
                "operation": "insert",
                "name": "ProcessesSearchFilter",
                "values": {
                    "type": "crt.SearchFilter",
                    "placeholder": "#ResourceString(ProcessesSearchFilter_placeholder)#",
                    "iconOnly": false,
                    "_filterOptions": {
                        "expose": [
                            {
                                "attribute": "ProcessesSearchFilter_GridDetail_20p8vr3",
                                "converters": [
                                    {
                                        "converter": "crt.SearchFilterAttributeConverter",
                                        "args": [
                                            "GridDetail_20p8vr3"
                                        ]
                                    }
                                ]
                            }
                        ],
                        "from": [
                            "ProcessesSearchFilter_SearchValue",
                            "ProcessesSearchFilter_FilteredColumnsGroups"
                        ]
                    }
                },
                "parentName": "ProcessesToolsFlexContainer",
                "propertyName": "items",
                "index": 2
            },
            {
                "operation": "insert",
                "name": "ProcessesGridContainer",
                "values": {
                    "type": "crt.GridContainer",
                    "columns": [
                        "minmax(32px, 1fr)"
                    ],
                    "rows": "minmax(max-content, 32px)",
                    "gap": {
                        "columnGap": "large",
                        "rowGap": "none"
                    },
                    "items": [],
                    "fitContent": true,
                    "visible": true,
                    "color": "transparent",
                    "borderRadius": "none",
                    "padding": {
                        "top": "none",
                        "right": "none",
                        "bottom": "none",
                        "left": "none"
                    },
                    "alignItems": "stretch"
                },
                "parentName": "ProcessesExpansionPanel",
                "propertyName": "items",
                "index": 0
            },
            {
                "operation": "insert",
                "name": "ProcessesList",
                "values": {
                    "type": "crt.DataGrid",
                    "features": {
                        "rows": {
                            "selection": false,
                            "numeration": true
                        },
                        "editable": {
                            "enable": false,
                            "itemsCreation": false,
                            "floatingEditPanel": false
                        }
                    },
                    "items": "$GridDetail_20p8vr3",
                    "activeRow": "$GridDetail_20p8vr3_ActiveRow",
                    "selectionState": "$GridDetail_20p8vr3_SelectionState",
                    "primaryColumnName": "ProcessesListDS_Id",
                    "columns": [
                        {
                            "id": "75694c38-cb09-558d-88c9-afc802663cbf",
                            "code": "ProcessesListDS_Name",
                            "caption": "#ResourceString(ProcessesListDS_Name)#",
                            "dataValueType": 28
                        },
                        {
                            "id": "0cf1439e-97d3-67b5-1fcd-9ec1010cba2f",
                            "code": "ProcessesListDS_Status",
                            "caption": "#ResourceString(ProcessesListDS_Status)#",
                            "dataValueType": 10,
                            "width": 149
                        },
                        {
                            "id": "34885c0d-1007-1e47-8e24-738d21df8ef1",
                            "code": "ProcessesListDS_CreatedBy",
                            "caption": "#ResourceString(ProcessesListDS_CreatedBy)#",
                            "dataValueType": 10
                        },
                        {
                            "id": "a05db7c4-8b17-f0c6-58b6-7c5cf643e442",
                            "code": "ProcessesListDS_StartDate",
                            "caption": "#ResourceString(ProcessesListDS_StartDate)#",
                            "dataValueType": 7,
                            "width": 146
                        },
                        {
                            "id": "e0e04d5e-8ceb-7474-1b83-dc2a7879d036",
                            "code": "ProcessesListDS_CompleteDate",
                            "caption": "#ResourceString(ProcessesListDS_CompleteDate)#",
                            "dataValueType": 7,
                            "width": 146
                        }
                    ],
                    "placeholder": false,
                    "_selectionOptions": {
                        "attribute": "GridDetail_20p8vr3_SelectionState"
                    },
                    "layoutConfig": {
                        "column": 1,
                        "colSpan": 1,
                        "row": 1,
                        "rowSpan": 8
                    }
                },
                "parentName": "ProcessesGridContainer",
                "propertyName": "items",
                "index": 0
            }
        ]/**SCHEMA_VIEW_CONFIG_DIFF*/,
        viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
            {
                "operation": "merge",
                "path": [
                    "attributes"
                ],
                "values": {
                    "GridDetail_20p8vr3": {
                        "isCollection": true,
                        "modelConfig": {
                            "path": "ProcessesListDS",
                            "sortingConfig": {
                                "default": [
                                    {
                                        "direction": "desc",
                                        "columnName": "StartDate"
                                    }
                                ]
                            },
                            "filterAttributes": [
                                {
                                    "name": "ProcessesSearchFilter_GridDetail_20p8vr3",
                                    "loadOnChange": true
                                },
                                {
                                    "loadOnChange": true,
                                    "name": "ProcessesList_PredefinedFilter"
                                }
                            ]
                        },
                        "viewModelConfig": {
                            "attributes": {
                                "ProcessesListDS_Name": {
                                    "modelConfig": {
                                        "path": "ProcessesListDS.Name"
                                    }
                                },
                                "ProcessesListDS_Status": {
                                    "modelConfig": {
                                        "path": "ProcessesListDS.Status"
                                    }
                                },
                                "ProcessesListDS_CreatedBy": {
                                    "modelConfig": {
                                        "path": "ProcessesListDS.CreatedBy"
                                    }
                                },
                                "ProcessesListDS_StartDate": {
                                    "modelConfig": {
                                        "path": "ProcessesListDS.StartDate"
                                    }
                                },
                                "ProcessesListDS_CompleteDate": {
                                    "modelConfig": {
                                        "path": "ProcessesListDS.CompleteDate"
                                    }
                                },
                                "ProcessesListDS_Id": {
                                    "modelConfig": {
                                        "path": "ProcessesListDS.Id"
                                    }
                                }
                            }
                        }
                    },
                    "ProcessesList_PredefinedFilter": {
                        "value": {
                            "items": {
                                "masterRecordFilterWrapper": {
                                    "filterType": 6,
                                    "isEnabled": true,
                                    "logicalOperation": 0,
                                    "items": {
                                        "masterRecordFilter": {
                                            "filterType": 6,
                                            "isEnabled": true,
                                            "logicalOperation": 1,
                                            "items": {
                                                "entityFilter": {
                                                    "filterType": 5,
                                                    "comparisonType": 15,
                                                    "isEnabled": true,
                                                    "leftExpression": {
                                                        "expressionType": 0,
                                                        "columnPath": "[VwSysProcessEntity:SysProcess].Id"
                                                    },
                                                    "subFilters": {
                                                        "filterType": 6,
                                                        "isEnabled": true,
                                                        "logicalOperation": 0,
                                                        "items": {
                                                            "EntityIdFilter": {
                                                                "filterType": 1,
                                                                "comparisonType": 3,
                                                                "isEnabled": true,
                                                                "leftExpression": {
                                                                    "expressionType": 0,
                                                                    "columnPath": "EntityId"
                                                                },
                                                                "rightExpression": {
                                                                    "expressionType": 2,
                                                                    "parameter": {
                                                                        "dataValueType": 1,
                                                                        "value": "47b777ca-4d1e-46f2-b2dc-22324202db2e"  // Case Id example
                                                                    }
                                                                }
                                                            },
                                                            "SchemaUidFilter": {
                                                                "filterType": 1,
                                                                "comparisonType": 3,
                                                                "isEnabled": true,
                                                                "leftExpression": {
                                                                    "expressionType": 0,
                                                                    "columnPath": "SysSchema.UId"
                                                                },
                                                                "rightExpression": {
                                                                    "expressionType": 2,
                                                                    "parameter": {
                                                                        "dataValueType": 1,
                                                                        "value": "117d32f9-8275-4534-8411-1c66115ce9cd"  // Case Schema UId
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            "logicalOperation": 0,
                            "isEnabled": true,
                            "filterType": 6,
                            "rootSchemaName": "VwSysProcessLog"
                        }
                    }
                }
            }
        ]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
        modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
            {
                "operation": "merge",
                "path": [
                    "dataSources"
                ],
                "values": {
                    "ProcessesListDS": {
                        "type": "crt.EntityDataSource",
                        "scope": "viewElement",
                        "config": {
                            "entitySchemaName": "VwSysProcessLog",
                            "attributes": {
                                "Name": {
                                    "path": "Name"
                                },
                                "Status": {
                                    "path": "Status"
                                },
                                "CreatedBy": {
                                    "path": "CreatedBy"
                                },
                                "StartDate": {
                                    "path": "StartDate"
                                },
                                "CompleteDate": {
                                    "path": "CompleteDate"
                                }
                            }
                        }
                    }
                }
            }
        ]/**SCHEMA_MODEL_CONFIG_DIFF*/,
        handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
        converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
        validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
    };
});
