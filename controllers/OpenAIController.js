const {OpenAIApi,Configuration}=require('openai');
const axios=require('axios');
class OpenAiController
{

    static async getModels(req,res)
    {
        axios.get(`${process.env.base_url}/models`,{
            headers:{
                'Authorization':`Bearer ${process.env.api_key}`
            }
        })
        .then(response => {
          res.status(200).json(response.data)
        })
        .catch(error => {
          res.send(error)
        });
    }

    static async sendMessage(req,res)
    {

        const {prompt,model}=req.body;
        // const config=new Configuration({
        //     apiKey:process.env.api_key,
        //   });
        // const openai=new OpenAIApi(config);
        // try {
        //     const response=await openai.createCompletion({
        //         prompt:prompt,
        //         model:model,
        //         max_tokens:1000
        //     }).then((res)=>res.status(200).json(res))
        // } catch (error) {
        //    return res.status(500).json({
        //     "msg":error
        //    })
        // }
    // .catch((e)=>);


        axios.post(`${process.env.base_url}/completions`,{
            'model':model,
            'prompt':prompt,
            'max_tokens':1000
        },{
            headers:{
                'Authorization':`Bearer ${process.env.api_key}`
            },
        })
        .then((response)=>{
          return res.status(200).json(response.data)
        })
        .catch(error => {
          res.send(error)
        });

    }
}

module.exports=OpenAiController;
