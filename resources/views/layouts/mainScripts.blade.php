<!-- Component template -->
<script type="text/x-template" id="grid-template">
	<table class="table table-striped table-hover table-condensed">
		<thead>
			<tr>
				<th v-for="key in columns">
					@{{ key | capitalize }}
					<span class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'dsc'"></span>
				</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="entry in filteredData">
				<td v-for="key in columns" v-html="entry[key]">
					<!-- Dinamic Content -->
				</td>
			</tr>
		</tbody>
	</table>
</script>
<!-- END Component template -->