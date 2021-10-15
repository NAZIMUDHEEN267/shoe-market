
module.exports = function(grunt){

	grunt.initConfig({
		concat:{
			css:{
				src: ['src/one.css','src/two.css'],
				dest: 'build/css/style.css'
			}
		},
		uglify:{
			my_target:{
				files:{
					'build/js/all.js' : ['src/home.js']
			}
			}
			}
	})

	
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');


	grunt.registerTask('concat-js',['concat:css']);
	grunt.registerTask('default',['uglify:my_target'])
}