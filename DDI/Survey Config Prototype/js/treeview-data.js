	var treeData = [
		{title: "Library A", key: "id4", expand: true, unselectable: true,
			children: [
				{title: "Domain A", expand: true,
					children: [
						{title: "Account Management V#", key: "id4.1.1", expand: true,
							children: [
							{title: "Balances sales funnel", key: "id4.1.1.1" },
							{title: "Prioritizes own activities", key: "id4.1.1.2" },
							{title: "Schedules", key: "id4.1.1.3" }
								]
						},
						{title: "Active Learning V#", key: "id4.1.2", expand: true,
							children: [
							{title: "Relishes learning", key: "id4.1.2.1" },
							{title: "Assimilates information quickly", key: "id4.1.2.2" },
							{title: "Welcomes feedback", key: "id4.1.2.3" },
							{title: "Applies knowledge or skill", key: "id4.1.2.4" }
								]
						},
					]
				},
				{title: "Domain B", expand: true,
					children: [
						{title: "Assignment Management V#", key: "id4.2.1", expand: true,
							children: [
							{title: "Balances sales funnel", key: "id4.2.1.1" },
							{title: "Prioritizes own activities", key: "id4.2.1.2" },
							{title: "Schedules", key: "id4.2.1.3" }
								]
						},
						{title: "Becoming a Business Advisor V#", key: "id4.2.2", expand: true,
							children: [
							{title: "Positions self as business partner", key: "id4.2.2.1" },
							{title: "Demonstrates business acumen", key: "id4.2.2.2" },
							{title: "Shares value-added insight", key: "id4.2.2.3" },
							{title: "Navigates organizational politics", key: "id4.2.2.4" },
							{title: "Cultivates an active network", key: "id4.2.2.5" }
								]
						},
					]
				},
			]
		},
//		{title: "Library B", key: "id4", expand: true,
//			children: [
//				{title: "Domain A", expand: true,
//					children: [
//						{title: "Assignment Management V#", key: "id4.1.1", expand: true,
//							children: [
//							{title: "Balances sales funnel", key: "id4.1.1.1" },
//							{title: "Prioritizes own activities", key: "id4.1.1.2" },
//							{title: "Schedules", key: "id4.1.1.3" }
//								]
//						},
//						{title: "Becoming a Business Advisor V#", key: "id4.2.2", expand: true,
//							children: [
//							{title: "Positions self as business partner", key: "id4.2.2.1" },
//							{title: "Demonstrates business acumen", key: "id4.2.2.2" },
//							{title: "Shares value-added insight", key: "id4.2.2.3" },
//							{title: "Navigates organizational politics", key: "id4.2.2.4" },
//							{title: "Cultivates an active network", key: "id4.2.2.5" }
//								]
//						},
//					]
//				},
//				
//			]
//		}
	];
	$(function(){

		// --- Initialize sample trees
		$("#tree1").dynatree({
			checkbox: true,
			// Override class name for checkbox icon:
			classNames: {checkbox: "dynatree-radio"},
			selectMode: 1,
			children: treeData,
			onActivate: function(node) {
				$("#echoActive1").text(node.data.title);
			},
			onSelect: function(select, node) {
				// Display list of selected nodes
				var s = node.tree.getSelectedNodes().join(", ");
				$("#echoSelection1").text(s);
			},
			onDblClick: function(node, event) {
				node.toggleSelect();
			},
			onKeydown: function(node, event) {
				if( event.which == 32 ) {
					node.toggleSelect();
					return false;
				}
			},
			// The following options are only required, if we have more than one tree on one page:
//			initId: "treeData",
			cookieId: "dynatree-Cb1",
			idPrefix: "dynatree-Cb1-"
		});

		$("#tree2").dynatree({
			checkbox: true,
			selectMode: 2,
			children: treeData,
			onSelect: function(select, node) {
				// Display list of selected nodes
				var selNodes = node.tree.getSelectedNodes();
				// convert to title/key array
				var selKeys = $.map(selNodes, function(node){
					   return "[" + node.data.key + "]: '" + node.data.title + "'";
				});
				$("#echoSelection2").text(selKeys.join(", "));
			},
			onClick: function(node, event) {
				// We should not toggle, if target was "checkbox", because this
				// would result in double-toggle (i.e. no toggle)
				if( node.getEventTargetType(event) == "title" )
					node.toggleSelect();
			},
			onKeydown: function(node, event) {
				if( event.which == 32 ) {
					node.toggleSelect();
					return false;
				}
			},
			// The following options are only required, if we have more than one tree on one page:
			cookieId: "dynatree-Cb2",
			idPrefix: "dynatree-Cb2-"
		});

		$("#tree3").dynatree({
			checkbox: true,
			selectMode: 3,
			children: treeData,
			onSelect: function(select, node) {
				// Get a list of all selected nodes, and convert to a key array:
				var selKeys = $.map(node.tree.getSelectedNodes(), function(node){
					return node.data.key;
				});
				$("#echoSelection3").text(selKeys.join(", "));

				// Get a list of all selected TOP nodes
				var selRootNodes = node.tree.getSelectedNodes(true);
				// ... and convert to a key array:
				var selRootKeys = $.map(selRootNodes, function(node){
					return node.data.key;
				});
				$("#echoSelectionRootKeys3").text(selRootKeys.join(", "));
				$("#echoSelectionRoots3").text(selRootNodes.join(", "));
			},
			onDblClick: function(node, event) {
				node.toggleSelect();
			},
			onKeydown: function(node, event) {
				if( event.which == 32 ) {
					node.toggleSelect();
					return false;
				}
			},
			// The following options are only required, if we have more than one tree on one page:
//				initId: "treeData",
			cookieId: "dynatree-Cb3",
			idPrefix: "dynatree-Cb3-"
		});

		$("#tree4").dynatree({
			checkbox: false,
			selectMode: 2,
			children: treeData,
			onQuerySelect: function(select, node) {
				if( node.data.isFolder )
					return false;
			},
			onSelect: function(select, node) {
				// Display list of selected nodes
				var selNodes = node.tree.getSelectedNodes();
				// convert to title/key array
				var selKeys = $.map(selNodes, function(node){
					   return "[" + node.data.key + "]: '" + node.data.title + "'";
				});
				$("#echoSelection4").text(selKeys.join(", "));
			},
			onClick: function(node, event) {
				if( ! node.data.isFolder )
					node.toggleSelect();
			},
			onDblClick: function(node, event) {
				node.toggleExpand();
			},
			onKeydown: function(node, event) {
				if( event.which == 32 ) {
					node.toggleSelect();
					return false;
				}
			},
			// The following options are only required, if we have more than one tree on one page:
//			initId: "treeData",
			cookieId: "dynatree-Cb4",
			idPrefix: "dynatree-Cb4-"
		});

		$("#btnToggleSelect").click(function(){
			$("#tree3").dynatree("getRoot").visit(function(node){
				node.toggleSelect();
			});
			return false;
		});
		$("#btnDeselectAll").click(function(){
			$("#tree3").dynatree("getRoot").visit(function(node){
				node.select(false);
			});
			return false;
		});
		$("#btnSelectAll").click(function(){
			$("#tree3").dynatree("getRoot").visit(function(node){
				node.select(true);
			});
			return false;
		});
		<!-- Start_Exclude: This block is not part of the sample code -->
		$("#skinCombo")
		.val(0) // set state to prevent caching
		.change(function(){
			var href = "../src/"
				+ $(this).val()
				+ "/ui.dynatree.css"
				+ "?reload=" + new Date().getTime();
			$("#skinSheet").attr("href", href);
		});
		<!-- End_Exclude -->
	});