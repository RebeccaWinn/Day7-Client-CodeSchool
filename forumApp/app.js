var app= new Vue({
    el:"#app",
    data:{
        page:"forum",
        threads_empty:"There are no threads for this category",
        //for filtering
        selected_category:"all",

        categories:[
            "all",
            "clothing",
            "hunting",
            "books",
            "cards",
            "coins",
            "keychains",
            "comic books",
            "misc."
            
        ],

        //for a new thread
        new_name:"",
        new_author:"",
        new_description:"",
        new_category:"all",

        threads:[
            {
                name:"Thread Name",
                author:"Becca",
                description:" This is the thread description",
                category:"all",
                posts:[
                    {
                        author:"post author",
                        body:" description of post here"
                    }
                ]
            },
            {
                name:"Thread Name 2",
                author:"Becca",
                description:"This is the thread description",
                category:"all",
                posts:[
                    {
                        author:"another post author",
                        body:"description of post here"
                    }
                ]
            },
        ]
    },

    methods:{
        createThread: function(){
            // var for a new thread
            var new_thread={
                name: this.new_name,
                author:this.new_author,
                description:this.new_description,
                category:this.new_category
            }
            //push the new thread to threads list
            this.threads.unshift(new_thread)

            //clear the inputs
            this.new_name="";
            this.new_author="";
            this.new_description="";
            this.category="all";
            this.page="forum";
        },


        //delete Thread function here
        deleteThread: function(index){
            this.threads.splice(index,1)
        }

    },
    computed:{
        //sorted threads here

        sorted_threads:function(){
            //if selected_category == "all"
            var chosen_category= this.selected_category

            if( chosen_category == "all"){
                return this.threads
            }
            //else filter through and see if category is equal to selected_category
            else{
                var sorted_threads= this.threads.filter(function(thread){
                    return thread.category == chosen_category;
                });
                return sorted_threads
            }

        }

    }




});